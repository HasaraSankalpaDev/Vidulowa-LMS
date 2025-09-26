const EnrolledCourses = ({ courses }) => (
  <div className="grid md:grid-cols-3 gap-4">
    {courses.map((course) => (
      <div key={course.id} className="bg-white rounded shadow p-4">
        <img
          src="http://localhost:3000/images/classes-category-image-02.png"
          alt={course.title}
          className="w-full h-32 object-cover rounded"
        />
        <h3 className="font-semibold mt-2">{course.title}</h3>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{course.progress}%</p>
      </div>
    ))}
  </div>
);

export default EnrolledCourses;
