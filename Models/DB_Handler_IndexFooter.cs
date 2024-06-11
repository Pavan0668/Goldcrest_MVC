using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Goldcrest_WEB_CMS.Models
{
    public class DB_Handler_IndexFooter
    {

        public static string GetFooterContent()
        {
            try
            {
                // Connection string to your database
                string _connectionString = ConfigurationManager.ConnectionStrings["ConnStringDb"].ConnectionString;

                // SQL query to retrieve footer content
                string query = "SELECT Footer_desc FROM Index_Footer WHERE Index_ID = 1";

                // Variable to store the footer content
                string footerContent = "";

                // Create a SqlConnection object
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    // Open the connection
                    connection.Open();

                    // Create a SqlCommand object
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        // Execute the query and get the result
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            // Check if there is data available
                            if (reader.Read())
                            {
                                // Get the footer content from the result
                                footerContent = reader["Footer_desc"].ToString();
                            }
                        }
                    }
                }

                return footerContent;
            }
            catch (Exception ex)
            {
                // Handle the exception
                // You might want to log the error or return a default footer content
                Console.WriteLine("An error occurred while retrieving the footer content: " + ex.Message);
                return "Default footer content"; // Return a default footer content or throw an exception
            }
        }
    }
}