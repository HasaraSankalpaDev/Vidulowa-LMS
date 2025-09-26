import FormCheckbox from "@/components/ui/FormCheckbox";
import React from "react";

export default function PrivacyForm({ setPrivacy, privacy }) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Privacy</h3>
      <div className="space-y-4">
        <FormCheckbox
          label="Profile visible to others"
          checked={privacy.profileVisible}
          onChange={() =>
            setPrivacy({
              ...privacy,
              profileVisible: !privacy.profileVisible,
            })
          }
        />
        <FormCheckbox
          label="Allow direct messages"
          checked={privacy.allowDMs}
          onChange={() =>
            setPrivacy({ ...privacy, allowDMs: !privacy.allowDMs })
          }
        />
      </div>
      <div className="mt-6 text-right">
        <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors w-full">
          Update
        </button>
      </div>
    </div>
  );
}
