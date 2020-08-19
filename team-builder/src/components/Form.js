import React from 'react';
import '../App.css';

function Form({ teamMember, onChange, onSubmit, renderCurrentMember }) {
return (
    <>
    <section className="form">
        <form onSubmit={event => onSubmit(event)}>
        <label>
            <br />
            Name: <input
            type="text"
            name="name"
            value={teamMember.name}
            onChange={event => onChange(event)}
            />
            Email: <input
            type="email"
            name="email"
            value={teamMember.email}
            onChange={event => onChange(event)}
            />
            Role: <input
            type="text"
            name="role"
            value={teamMember.role}
            onChange={event => onChange(event)}
            />
        </label>
        <button onClick={renderCurrentMember}>Submit</button>
        </form>
    </section>
    </>
);
}

export default Form;
