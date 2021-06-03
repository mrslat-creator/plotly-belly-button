//Function for change on dropdown menu
function optionChanged(selectedID){

    //Check if value is selcted in dropdown
    console.log(selectedID);

    // Read the json file for the data
    d3.json("data/samples.json").then((data) =>
    
    {

    // console.log(data);

      //Clears dropdown
      d3.select("#selDtaset").html("");

    // Select the metadata array and for each item append the item ID and adds ID to dropdown
    data.metadata.forEach(item=>)
    {
        //console.log(item.id);
        d3.select("#selDataset").append('option').attr('value', item.id).text(item.id);
    });
     //Selected value is passed
        d3.select ("#selDataset").node().value = selectedID;

     //Filter Metadata for selected ID from dropdown
     const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
        //{
        //  console.log("----------------------")
        //  console.log(item);
        //  console.log(item.id);

        //});
    // Check the metadata loaded for the selected ID
    console.log(idMetadata);

    const panelDisplay = d3.select("#sample-metadata");
    panelDisplay.html("");
    Object.entries(idMetadata[0]).forEach(item=>
      {
          //console.log(item);
          panelDisplay.append("p").text('${item[0]}: ${item[1]}')
       });
    //Bar Chart

    //Filter sample array data for the selcted ID
    const idSample =data.samples.filter(item=> parseInt(item.id) ==selectedID);

    // // Check values
    // console.log(typeof parseInt(item.id));
    // console.log(idSample[0].sample_values);
    // console.log(idSample[0].otu_ids);
    // console.log(idSample[0].otu_lables);

    //Slice top 10 sample values
    var sampleValue= idSample[0].sample_values.slive(0,10);
    sampleValue= sampleValue.reverse();
    var otuID = idSample[0].otu_ids.slice(0,10);
    otuID =otuId.reverse();
    var otuLabels = idSample[0].otu_labels
    otulables = otuLables. reverse();

    // // Check values
    //console.log(sampleValue);
    //console.log(otuID);
    //console.log(otuLabels);

    //Y axis of bar chart
    const yAxis = otuID.map(item => 'OTU' + " " + item);
      // consol.log(yAxis);

    // Define the layout and trace object, edit color and orientation
       const trace = {
       y: yAxis, 
       x sampleValue,
       type: 'bar',
       orientation: "h",
       text: otuLabels,
       maker: {
         color: 'rgb(154, 140 152)',
         line  {
           width: 3
         }
       }
       },
       layout = {
       title: 'Top 10 Operational Taxonmic Units (OTU)/Individual',
       xaxis: {title: 'Number of Samples Collected'},
       yaxis: {title: 'OTU ID'}
       };

       //Plot using Plotly
       Plotly.newPlot('bar', [trace], layout,  {responsive: true});

       //Bubble Chart

       //Remove Sample value and otuID from individual
       
    }
}