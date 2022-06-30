var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData()
        if (selectedRow == null)
            insertNewRecord(formData)
        else
            updateRecord(formData)
        resetForm()
    }
}


function readFormData() {
    var formData = {}
    formData['fullName'] = document.getElementById('fullName').value
    formData['dateOfBirth'] = document.getElementById('dateOfBirth').value
    formData['salary'] = document.getElementById('salary').value
    formData['city'] = document.getElementById('city').value
    formData['genotype'] = document.getElementById('genotype').value
    return formData
}

function insertNewRecord(data) {
    var table = document.getElementById('applicationList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullName
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.dateOfBirth
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.salary
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.city
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.genotype
    cell5 = newRow.insertCell(5)
    cell5.innerHTML = `<a onClick='onEdit(this)'>Edit</a>
                       <a onClick='onDelete(this)'>Delete</a>`
}

function resetForm() {
    document.getElementById('fullName').value = ''
    document.getElementById('dateOfBirth').value = ''
    document.getElementById('salary').value = ''
    document.getElementById('city').value = ''
    document.getElementById('genotype').value = ''
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML
    document.getElementById('dateOfBirth').value = selectedRow.cells[1].innerHTML
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML
    document.getElementById('city').value = selectedRow.cells[3].innerHTML
    document.getElementById('genotype').value = selectedRow.cells[4].innerHTML
}

var FULLNAMEcharac


function hero(e) {
    var textEntered, charDisplay
    textEntered = document.getElementById('fullName').value
    charDisplay = document.getElementById('charactersLeft')
    counter = (23 - (textEntered.length))
    charDisplay.textContent = counter + ' characters REMAINING'
}
FULLNAMEcharac= document.getElementById('fullName')
FULLNAMEcharac.addEventListener('keypress', hero, false)

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName
    selectedRow.cells[1].innerHTML = formData.dateOfBirth
    selectedRow.cells[2].innerHTML = formData.salary
    selectedRow.cells[3].innerHTML = formData.city
    selectedRow.cells[4].innerHTML = formData.genotype

}

function onDelete(td) {
    if (confirm('Are you sure?')) {
        var row = td.parentElement.parentElement
        document.getElementById('applicationList').deleteRow(row.rowIndex)
        resetForm()
    }
}

function validate() {
    isValid = true
    if (document.getElementById('fullName').value == "") {
        isValid = false
        document.getElementById('fullNameValidationError').classList.remove('hide')
    } else {
        isValid = true
        if (!document.getElementById('fullNameValidationError').classList.contains('hide'))
            document.getElementById('fullNameValidationError').classList.add('hide')
    }
    return isValid
}