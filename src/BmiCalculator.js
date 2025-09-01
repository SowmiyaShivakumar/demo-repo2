import React, { useState } from 'react';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height);
        const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
        setBmi(calculatedBmi);
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <input type='number' placeholder='Weight (kg)' value={weight} onChange={(e) => setWeight(e.target.value)} />
            <input type='number' placeholder='Height (m)' value={height} onChange={(e) => setHeight(e.target.value)} />
            <button onClick={calculateBmi}>Calculate</button>
            {bmi && <p>Your BMI: {bmi.toFixed(2)}</p>}
        </div>
    );
};

export default BmiCalculator;