// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  contactEndpoint: 'https://europe-west1-la-sophrologie-pas-a-pas.cloudfunctions.net/send-mail',
  recaptchaScriptUrl: 'https://www.google.com/recaptcha/enterprise.js?render=6LewGFElAAAAAHn0uMqVMoZLM_J94_Y8F0R8DWr9'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
