import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { TitleService } from '../title.service';
import { ToastService } from '../toast.service';
import { AxeptioService } from '../axeptio.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  isSending = false;
  isEnabled = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _httpClient: HttpClient,
    private readonly _toastService: ToastService,
    private readonly _titleService: TitleService,
    private readonly _meta: Meta,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _axeptioService: AxeptioService,
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Contact');
    this._meta.updateTag({
      name: 'description',
      content: 'Contactez-moi pour toute question ou demande de renseignement. Je suis là pour vous aider dans tous vos besoins juridiques.'
    });
    this._meta.updateTag({
      name: 'og:description',
      content: 'Contactez-moi pour toute question ou demande de renseignement. Je suis là pour vous aider dans tous vos besoins juridiques.'
    });
    this._meta.updateTag({
      name: 'keywords',
      content: 'avocat, cabinet, Rouen, contact, question, renseignement, besoin juridique'
    });
    this._meta.updateTag({
      name: 'og:image',
      content: '/assets/images/contact.jpg'
    });
    this._meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });
    this._buildForm();
    this._checkConsent();
  }

  public get name() { return this.contactForm.get('name'); }
  public get email() { return this.contactForm.get('email'); }
  public get subject() { return this.contactForm.get('subject'); }
  public get message() { return this.contactForm.get('message'); }

  submit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSending = true;

    const grecaptcha = (window as any).grecaptcha;
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(environment.recaptchaSiteKey, { action: 'SEND_MAIL' });
      this._httpClient.post(environment.contactEndpoint,
        {
          token,
          name: this.name!.value,
          subject: this.subject!.value,
          email: this.email!.value,
          message: this.message!.value.replaceAll('\n', '<br>')
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
        .subscribe((response: any) => {
          this.isSending = false;
          if (response.success) {
            this._toastService.showSuccess('Votre message a bien été envoyé !');
            this.contactForm.reset();
          } else {
            switch (response.errorType) {
              case "recaptchaValidation":
                this._toastService.showError('Le captcha a échoué, veuillez rafraichir la page et renvoyer votre message.');
                break;
              case "missingFields":
                this._toastService.showError('Veuillez vérifier que tous les champs sont bien renseignés.');
                break;
              case "mailSending":
                this._toastService.showError('Le message n\'a pas pu être envoyé, veuillez réessayer plus tard.');
                break;
            }
          }
        })
    });
  }

  private _buildForm(): void {
    this.contactForm = this._formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      email: [
        '',
        {
          validators: [
            Validators.required,
            Validators.email
          ],
          updateOn: 'blur'
        }
      ],
      subject: [
        '',
        Validators.required
      ],
      message: [
        '',
        Validators.required
      ]
    })
  }

  private _initializeRecaptcha(): void {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = environment.recaptchaScriptUrl;
    head?.appendChild(script);
  }

  private async _checkConsent(): Promise<void> {
    this._axeptioService.activationChange$()
      .pipe(filter(activationStatus => activationStatus.service === 'recaptcha_enterprise'))
      .subscribe(activationStatus => {
        this.isEnabled = activationStatus.activation;
        if (this.isEnabled) {
          this._initializeRecaptcha();
        }
        this._cdr.detectChanges();
      });
  }
}
