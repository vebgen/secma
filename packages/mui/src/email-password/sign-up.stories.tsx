import { SecMaContextProvider, SignInFormProps } from "@secma/react";
import type { StoryFn, Meta } from '@storybook/react';
import { SimpleController as G11nController } from '@vebgen/g11n';
import { enqueueSnackbar } from 'notistack';

import enMessages from '../../i18n/en.json';
import { SignUpMuiForm } from "./sign-up";


// The properties passed to each story.
type StoryProps = SignInFormProps;


// Common configuration for all stories.
const storybookConfig: Meta<StoryProps> = {
    title: 'email-password/sign-up',
    tags: [],
    component: SignUpMuiForm,
    args: {
        onSignIn: () => { enqueueSnackbar("Signed In"); },
    },
};
export default storybookConfig;


// Base for all stories in this file.
export const Default: StoryFn<StoryProps> = (args) => (
    <G11nController messages={{ "en": enMessages }} initialLocale='en'>
        <SecMaContextProvider value={{
            signIn: (username: string, password: string) => {
                enqueueSnackbar(
                    `Signed In request by ${username} with password ${password}`
                );
                return Promise.resolve({
                    token: "lorem",
                    sub: "ipsum",
                    exp: 12345,
                    scopes: ["dolor", "sit"]
                });
            },
            signOut: () => { },
            expires: 123545,
            permissions: [""],
            user_name: undefined,
        }}>
            <SignUpMuiForm {...args} />
        </SecMaContextProvider>
    </G11nController>
)
