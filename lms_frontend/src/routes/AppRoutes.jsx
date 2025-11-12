import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import LessonViewer from "../pages/LessonViewer";
import Account from "../pages/Account";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/routing/ProtectedRoute";

// PUBLIC_INTERFACE
export default function AppRoutes() {
  /** Defines application routes */
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonViewer />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
