import React, { useState } from "react";
import { MyButton, TextField } from "../../components";

export default function CreatePage({afterSubmit}) {
    const [name, setName] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        let projects = JSON.parse(localStorage.getItem('projects')) ?? [];
        let _id = Math.ceil(Math.random() * 100).toString();
        let data = {
            page: null,
            id: _id,
            label: name,
            active: true,
            slug: `/${name.toLowerCase()}`
        };
        projects.push(data);
        localStorage.setItem('projects', JSON.stringify(projects));
        afterSubmit();
    }

    return (
        <form className="mb-4" autoComplete="off" onSubmit={handleCreate}>
            <TextField
                label='Title'
                required
                placeholder='Title'
                handleInput={(e) => setName(e.target.value)}
            />
            <p className="mt-4">
                slug:{`/${name.toLowerCase()}`}
            </p>
            <MyButton
                type="submit"
                color="dark"
                label='Save'
                btnStyle='mt-4'
            />
        </form>
    )
}