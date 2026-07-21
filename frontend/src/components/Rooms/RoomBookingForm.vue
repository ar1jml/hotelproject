<template>
    <div class="booking-box">

        <div class="field">
            <label>Check In</label>
            <input type="date">
        </div>

        <div class="field">
            <label>Check Out</label>
            <input type="date">
        </div>

        <div class="field">
            <label>Adults</label>

            <select>
                <option>1</option>
                <option selected>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>

        <div class="field">
            <label>Children</label>

            <select>
                <option selected>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>

        <button>
            Search
        </button>

    </div>
</template>

<style scoped>

.booking-box{
    display:flex;
    gap:20px;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 8px 20px rgba(0,0,0,.15);
    align-items:flex-end;
}

.field{
    display:flex;
    flex-direction:column;
    flex:1;
}

input,
select{
    padding:12px;
}

button{
    padding:12px 30px;
}

</style>