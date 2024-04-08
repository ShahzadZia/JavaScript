// Function to switch between navigation links
const setActiveLink = (clickedLink) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
  };
  
  // Function to render dummy content for dashboard
  const renderDashboard = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section>
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard! Here you can view key metrics and performance indicators.</p>
      </section>
    `;
  };
  
  // Function to render dummy content for contacts
  const renderContacts = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section>
        <h2>Contacts</h2>
        <p>This is the contacts page. You can manage your contact list and view contact details here.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>123-456-7890</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>987-654-3210</td>
            </tr>
            <tr>
              <td>Michael Johnson</td>
              <td>michael@example.com</td>
              <td>456-789-0123</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;
  };
  
  // Function to render dummy content for leads
  const renderLeads = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section>
        <h2>Leads</h2>
        <p>Here are your leads. You can track potential customers and manage their information.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>ABC Corp</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>XYZ Inc</td>
              <td>jane@example.com</td>
            </tr>
            <tr>
              <td>Michael Johnson</td>
              <td>123 Industries</td>
              <td>michael@example.com</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;
  };
  
  // Function to render dummy content for tasks
  const renderTasks = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section>
        <h2>Tasks</h2>
        <p>Manage your tasks efficiently on this page. Stay organized and track your progress.</p>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 4</li>
        </ul>
      </section>
    `;
  };
  
  // Function to render dummy content for reports
  const renderReports = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section>
        <h2>Reports</h2>
        <p>View insightful reports and analytics to gain valuable business insights.</p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-01-01</td>
              <td>$1000</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>2024-01-02</td>
              <td>$1200</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>2024-01-03</td>
              <td>$1500</td>
              <td>$700</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;
  };
  
  // Event listeners for navigation links
  document.addEventListener('DOMContentLoaded', renderDashboard);
  
  document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      setActiveLink(event.target);
      const page = event.target.textContent.toLowerCase();
      switch (page) {
        case 'dashboard':
          renderDashboard();
          break;
        case 'contacts':
          renderContacts();
          break;
        case 'leads':
          renderLeads();
          break;
        case 'tasks':
          renderTasks();
          break;
        case 'reports':
          renderReports();
          break;
        default:
          console.log('Invalid page');
      }
    }
  });
  
