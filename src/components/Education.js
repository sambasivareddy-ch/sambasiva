import React from "react";

import styles from "../styles/page.module.css";

const Education = () => {
    return (
        <div className={styles["edu-wrapper"]} id="education">
            <h2 className={styles["title"]}>Education</h2>
            <table className={styles["table"]}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>University/School Name</th>
                        <th>Branch</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            Gayatri Vidya Parishad College of Engineering (2019
                            - Present)
                        </td>
                        <td>Computer Science</td>
                        <td>9.10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>TLMSM Junior College (2017 - 2019)</td>
                        <td>M.P.C</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sri Sarada Vidyanikethan High School (2016)</td>
                        <td>General</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;
