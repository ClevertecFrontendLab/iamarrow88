export type LoginDataCollector = (
    userMail: string,
    password: string,
    isRemembered: boolean
) => void;

export type RecoveryDataCollector = (
    userMail: string
) => void;
