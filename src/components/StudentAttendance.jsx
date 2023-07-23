
    const students = [
        {
            name: "Mais",
            attend: false
        },
        {
            name: "Athraa",
            attend: true
        },
        {
            name: "Nada",
            attend: false
        },
        {
            name: "Zahraa",
            attend: true
        }
    ];

    export default function StudentAttendance() {
        return (
            <div>
                {students.map((student)=>{
                if (student.attend === true) {
                    return  <li>
                                <p className="studentLiStl">{student.name}</p>
                                <p className="availableStu">{student.name} is here!</p>
                            </li> 
                }
                if (student.attend === false) {
                    return  <li>
                                <p className="studentLiStl">{student.name}</p>
                                <p className="notAvailableStu">{student.name} is not here!</p>
                            </li> 
                }
                })}
            </div>
        );
    }