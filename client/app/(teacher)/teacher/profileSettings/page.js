"use client";
import React, { useState } from "react";
import ProfileForm from "@/components/pages/student/ProfileForm";
import PasswordForm from "@/components/pages/student/PasswordForm";
import NotificationsForm from "@/components/pages/student/NotificationsForm";
import PrivacyForm from "@/components/pages/student/PrivacyForm";
import { useTeacher } from "@/context/TeacherContext";

const ProfilePage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    inApp: true,
    sms: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    allowDMs: false,
  });

  // ✅ Get both teacher and student data
  const { teacher } = useTeacher() || {};

  // ✅ Choose which user is active
  const userData = teacher;

  return (
    <main className="flex-1 p-6 lg:p-8 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl lg:text-3xl font-bold">Settings</h1>
        <p className="text-muted-light dark:text-muted-dark mt-1">
          Manage your account settings and preferences.
        </p>
      </header>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* ✅ Pass correct data */}
          <ProfileForm default_data={userData} />

          {/* Change Password */}
          <PasswordForm />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-8">
          <NotificationsForm
            notifications={notifications}
            setNotifications={setNotifications}
          />
          <PrivacyForm privacy={privacy} setPrivacy={setPrivacy} />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
