
const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name);
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (grades.length === 0) return null;

        const total = grades.reduce((sum, grade) => sum + grade, 0);
        return Number((total / grades.length).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) return null;

        return [...this.students].sort(
            (a, b) => this.getStudentAverage(b.name) - this.getStudentAverage(a.name)
        )[0];
    },

    getStrugglingStudents() {
        return this.students.filter(
            student => this.getStudentAverage(student.name) < 60
        );
    },

    getLetterGrade(average) {
        if (average >= 80) return "A";
        if (average >= 70) return "B";
        if (average >= 60) return "C";
        if (average >= 50) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const average = this.getStudentAverage(name);

        return {
            name: student.name,
            grades: student.grades,
            average,
            letterGrade: this.getLetterGrade(average)
        };
    }
};

// Add students
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

// Test the grade tracker
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent());
console.log("Struggling students:", gradeTracker.getStrugglingStudents());
console.log("Alice's report card:", gradeTracker.generateReportCard("Alice"));
