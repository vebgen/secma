import type { StoryFn, Meta } from '@storybook/react';
import { enqueueSnackbar } from 'notistack';

import {
    PageTitle as PageTitleComponent,
    TheText as TheTextComponent,
    UsernameField as UsernameFieldComponent,
    PasswordField as PasswordFieldComponent,
    RememberField as RememberFieldComponent,
    MainButton as MainButtonComponent,
    TheLink as TheLinkComponent,
    LostPasswordLink as LostPasswordLinkComponent,
} from "./common";
import { Form } from 'react-final-form';



// The properties passed to each story.
type StoryProps = {};

// Common configuration for all stories.
const storybookConfig: Meta<StoryProps> = {
    title: 'email-password/common',
    tags: [],
    args: {},
};
export default storybookConfig;


export const PageTitle: StoryFn<StoryProps> = () => (
    <PageTitleComponent>
        Content
    </PageTitleComponent>
);


export const TheText: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[TheText] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <TheTextComponent name="lorem">
                    Content
                </TheTextComponent>
            </form>
        )}
    />
);


export const UsernameField: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[UsernameField] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <UsernameFieldComponent />
            </form>
        )}
    />
);


export const PasswordField: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[PasswordField] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <PasswordFieldComponent />
            </form>
        )}
    />
);


export const RememberField: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[RememberField] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <RememberFieldComponent />
            </form>
        )}
    />
);


export const MainButton: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[MainButton] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <MainButtonComponent>
                    Content
                </MainButtonComponent>
            </form>
        )}
    />
);


export const TheLink: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[TheLink] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <TheLinkComponent to="/missing-page">
                    Content
                </TheLinkComponent>
            </form>
        )}
    />
);


export const LostPasswordLink: StoryFn<StoryProps> = () => (
    <Form
        onSubmit={() => { enqueueSnackbar("[TheLink] Form Submit") }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
                <LostPasswordLinkComponent />
            </form>
        )}
    />
);
