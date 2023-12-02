import { Heading } from "../ui";
import { SettingsForm } from "../features/settings/SettingsForm";
function Settings() {
  return (
    <div>
      <Heading as="h2" style={{ textAlign: "center" }}>
        Update cabin settings
      </Heading>
      <SettingsForm />
    </div>
  );
}

export { Settings };
