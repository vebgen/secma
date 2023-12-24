import { FC } from "react";
import { Text as TextField } from '@vebgen/mui-rff-text';
import { FormattedMessage } from "react-intl";


/**
 * A control that includes all the fields that are required to edit or create
 * a role.
 *
 * The component needs to be wrapped in a form, as it uses the form context
 * to get and set the values.
 */
export const RoleEditor: FC = () => (
    <>
        <TextField
            autoFocus
            label={
                <FormattedMessage
                    id="secma-mui.roles.add.slug"
                    defaultMessage="Slug"
                />
            }
            name="slug"
            required={true}
            fullWidth
            variant="standard"
            margin="dense"
        />
        <TextField
            label={
                <FormattedMessage
                    id="secma-mui.roles.add.title"
                    defaultMessage="Title"
                />
            }
            name="title"
            required={false}
            fullWidth
            variant="standard"
            margin="dense"
        />
        <TextField
            label={
                <FormattedMessage
                    id="secma-mui.roles.add.d"
                    defaultMessage="Description"
                />
            }
            name="description"
            required={false}
            fullWidth
            variant="standard"
            margin="dense"
            multiline
        />
    </>
)
