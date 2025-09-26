import FormCheckbox from "@/components/ui/FormCheckbox";
import React from "react";

export default function NotificationsForm({ setNotifications, notifications }) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <div className="space-y-4">
        <FormCheckbox
          label="Email Notifications"
          checked={notifications.email}
          onChange={() =>
            setNotifications({
              ...notifications,
              email: !notifications.email,
            })
          }
        />
        <FormCheckbox
          label="In-app Notifications"
          checked={notifications.inApp}
          onChange={() =>
            setNotifications({
              ...notifications,
              inApp: !notifications.inApp,
            })
          }
        />
        <FormCheckbox
          label="SMS Alerts"
          checked={notifications.sms}
          onChange={() =>
            setNotifications({
              ...notifications,
              sms: !notifications.sms,
            })
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
