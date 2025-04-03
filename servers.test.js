describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() if the input is empty', function () {
    serverNameInput.value = ''; // Clear input to simulate empty input
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0); //
    // Ensure no new server was added
  });

  it('should update #serverTable on updateServerTable()', function () {
    submitServerInfo(); // Add a server first
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3); // 1 for server name, 1 for tip average, 1 for delete button
    expect(curTdList[0].innerText).toEqual('Alice'); // Check server name
    expect(curTdList[1].innerText).toEqual('$0.00'); // Check tip average, assuming no payments have been made
    expect(curTdList[2].innerText).toEqual('X'); // Check delete button
  });

  afterEach(function() {
    // teardown logic
    serverId = 0; // Reset serverId to avoid conflicts in tests
    serverTbody.innerHTML = ''; // Clear the server table
    allServers = {}; // Reset allServers object to ensure no leftover data
  });
});
