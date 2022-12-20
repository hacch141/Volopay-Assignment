import React from 'react';
import './FilterForm.css';

const FilterForm = () => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                 <div className='filters'>Filters</div>
                <div className='type'>Type</div>
                <div className='check'>
                    <div><input type="checkbox"/><span>subscription</span></div>
                    <div><input type="checkbox"/><span>burner</span></div>
                </div>
                <div className='card-holder'>Cardholder</div>
                <select Select-cardholder>
                    <option value="Select cardholder">Select cardholder</option>
                    <option value="Harsh">Harsh</option>
                    <option value="Rajesh">Rajesh</option>
                    <option value="Vishal">Vishal</option>
                    <option value="Mayank">Mayank</option>
                    <option value="Rojith">Rojith</option>
                    <option value="Sanjay">Sanjay</option>
                    <option value="Rana">Rana</option>
                    <option value="Srushti">Srushti</option>
                    <option value="Bhargavi">Bhargavi</option>
                    <option value="Nihar">Nihar</option>
                    <option value="Smruti">Smruti</option>
                    <option value="Rajat">Rajat</option>
                    <option value="jay">jay</option>
                    <option value="Darpan">Darpan</option>
                    <option value="Kamlesh">Kamlesh</option>
                    <option value="Deepak">Deepak</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Shrey">Shrey</option>
                    <option value="Khvahish">Khvahish</option>
                    <option value="Tinku">Tinku</option>
                </select>
                <br />

                <div className='btn'>
                    <div className='apply-btn'>
                        <button type='submit'>
                            Apply
                        </button>
                    </div>
                    <div className='clear-btn'>
                        <button type='reset'>
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default FilterForm;