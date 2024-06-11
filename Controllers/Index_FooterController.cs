using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Goldcrest_WEB_CMS.Controllers
{
    public class Index_FooterController : Controller
    {
        // GET: Index_Footer
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult UpdateFooterContent(string newContent)
        {
            try
            {
                string _connectionString = ConfigurationManager.ConnectionStrings["ConnStringDb"].ConnectionString;
                string checkQuery = "SELECT COUNT(*) FROM Index_Footer WHERE Index_ID = 1";
                string updateQuery = "UPDATE Index_Footer SET Footer_desc = @NewContent WHERE Index_ID = 1";
                string insertQuery = "INSERT INTO Index_Footer (Index_ID, Footer_desc) VALUES (1, @NewContent)";
                string selectQuery = "SELECT Footer_desc FROM Index_Footer WHERE Index_ID = 1";

                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    using (SqlCommand checkCommand = new SqlCommand(checkQuery, connection))
                    {
                        int count = (int)checkCommand.ExecuteScalar();

                        if (count > 0)
                        {
                            using (SqlCommand updateCommand = new SqlCommand(updateQuery, connection))
                            {
                                updateCommand.Parameters.AddWithValue("@NewContent", newContent);
                                updateCommand.ExecuteNonQuery();
                            }
                        }
                        else
                        {
                            using (SqlCommand insertCommand = new SqlCommand(insertQuery, connection))
                            {
                                insertCommand.Parameters.AddWithValue("@NewContent", newContent);
                                insertCommand.ExecuteNonQuery();
                            }
                        }
                    }

                    // Fetch the updated content
                    using (SqlCommand selectCommand = new SqlCommand(selectQuery, connection))
                    {
                        string updatedContent = (string)selectCommand.ExecuteScalar();

                        // Return JavaScript snippet to reload the page and then reload again after 5 seconds
                        string script = "<script>" +
                                        "window.location.reload();" + // Reload the page
                                        "setTimeout(function() { window.location.reload(); }, 5000);" + // Reload again after 5 seconds
                                        "</script>";
                        return Content(script, "text/html");

                        //return Json(new { success = true, content = updatedContent });
                    }
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = "An error occurred while updating the footer content: " + ex.Message });
            }
        }

        [HttpGet]
        public ActionResult GetFooterContent()
        {
            try
            {
                string _connectionString = ConfigurationManager.ConnectionStrings["ConnStringDb"].ConnectionString;
                string selectQuery = "SELECT Footer_desc FROM Index_Footer WHERE Index_ID = 1";

                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    using (SqlCommand selectCommand = new SqlCommand(selectQuery, connection))
                    {
                        string content = (string)selectCommand.ExecuteScalar();
                        return Json(new { success = true, content = content }, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = "An error occurred while fetching the footer content: " + ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

    }
}