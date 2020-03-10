var patient = {
  "resourceType": "Patient",
  "id": "xcda",
  "status": "generated",
  "div": "Henry Levin the 7th",
  "identifier": {
    "use": "usual",
    "type": {
      "coding": {
        "system": "htt://hl7.org/fhir/v2/0203",
        "code": "MR"
      }
    },
    "system": "urn:oid:2.16.840.1.113883.19.5",
    "value": 12345,
    "active": true,
    "name": {
      "family": "Levin",
      "given": "Henry"
    },
    "gender": "male",
    "birthDate": "2002-09-24",
    "managingOrganization": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "University Health Network"
    },
    "conditions": [
      "Diabetes",
      "High blood pressure",
      "Asthma"
    ]
  }
}


var patientInfo = patient.identifier;
var patientName = patientInfo.name;
var patientOrg = patientInfo.managingOrganization;
var patientGender = patientInfo.gender;
var patientCondits = patientInfo.conditions;

var text = "";
var i;
for (i = 0; i < patientCondits.length; i++) {
  text += '– ' + patientCondits[i] + "<br>";
}

var output = document.getElementById('output');

output.innerHTML =
'Name of Patient: ' + patientName.given + ' ' + patientName.family +
'<br /> Organization: ' + patientOrg.display +
'<br /> Gender: ' + patientGender +
'<br /> Number of Conditions: ' + patientCondits.length +
'<br /> List of all Conditions: <br />' + text;
