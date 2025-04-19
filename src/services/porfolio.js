import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "./config";

export const getProject = async (id) => {
    const docRef = doc(db, "portfolio", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("No such document!");
    }
}

export const getProjects = async () => {
    const q = query(collection(db, "portfolio"));
    const querySnapshot = await getDocs(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
}

export const getProjectsByCategory = async (category) => {
    const q = query(collection(db, "portfolio"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
}

export const getLatestProjects = async () => {
    try {
        const q = query(collection(db, "portfolio"));
        const querySnapshot = await getDocs(q);
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });

        projects.sort((a, b) => b.date - a.date);
        return projects.slice(0, 3);
    }
    catch (error) {
        console.error("Error fetching latest projects:", error);
        return [];
    }
}