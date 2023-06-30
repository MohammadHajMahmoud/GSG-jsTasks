let myLeads = [];
const input = document.getElementById("input");
const sites = document.getElementById("sites");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete");
const leadsInLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab");

if (leadsInLocalStorage) {
  myLeads = leadsInLocalStorage;
  renderSavedSites(myLeads);
}
inputBtn.addEventListener("click", function () {
  myLeads.push(input.value);
  input.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderSavedSites(myLeads);
});
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderSavedSites(myLeads)
    })
})
deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  renderSavedSites(myLeads);
});



function renderSavedSites(arrayOfleads) {
    let listItems = ""
    for (let i = 0; i < arrayOfleads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${arrayOfleads[i]}'>
                    ${arrayOfleads[i]}
                </a>
            </li>
        `
    }
    sites.innerHTML = listItems
}