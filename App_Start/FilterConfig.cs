﻿using System.Web;
using System.Web.Mvc;

namespace Goldcrest_WEB_CMS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
