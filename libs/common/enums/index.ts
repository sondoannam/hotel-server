export enum SortCaseEnum {
  Asc = 'asc',
  Desc = 'desc',
}

// use in multi language support
export enum CommonErrorMessagesEnum {
  NotFound = 'notFound',
  EitherPhoneOrEmailIsRequired = 'eitherPhoneOrEmailIsRequired',
  EmailExisted = 'emailExisted',
  PhoneExisted = 'phoneExisted',
  UserNotFound = 'userNotFound',
  PhoneLengthError = 'phoneLengthError',
  InvalidPhoneFormat = 'invalidPhoneFormat',
  NameTooShort = 'nameTooShort',
  NameTooLong = 'nameTooLong',
  InvalidAvatarUrl = 'invalidAvatarUrl',
  EmptyUpdatePayload = 'emptyUpdatePayload',
  UserHasActiveBookings = 'userHasActiveBookings',
  ImageNotFound = 'imageNotFound',
  GetImageFailed = 'getImageFailed',
  RequestFailed = 'requestFailed',
}

export enum RoleErrorMessagesEnum {
  RoleNotFound = 'roleNotFound',
  CannotBeAdmin = 'cannotBeAdmin',
  CannotBeStaff = 'cannotBeStaff',
  CannotBeCustomer = 'cannotBeCustomer',
}

export enum AuthErrorMessageEnum {
  InvalidEmailOrPhone = 'invalidEmailOrPhone',
  WrongUsernameOrPassword = 'wrongUsernameOrPassword',
  InvalidRefreshToken = 'invalidRefreshToken',
  PhoneIsRequired = 'phoneIsRequired',
  EmailIsRequired = 'emailIsRequired',
  EmailNotVerified = 'emailNotVerified',
  PhoneNotVerified = 'phoneNotVerified',
}

export enum ImageErrorMessagesEnum {
  InvalidImageFormat = 'invalidImageFormat',
  InvalidImageSize = 'invalidImageSize',
  InvalidImageType = 'invalidImageType',
  InvalidImageUrl = 'invalidImageUrl',
  ImageUploadFailed = 'imageUploadFailed',
  ImageDeleteFailed = 'imageDeleteFailed',
  ImageNotFound = 'imageNotFound',
}
