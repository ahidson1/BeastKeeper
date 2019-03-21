using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BeastKeeper.Core.Models;
using System.Threading.Tasks;
using BeastKeeper.Web.Data;

namespace BeastKeeper.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "BeastKeeper - Beastiary";
            return View();
        }

        public ActionResult Profile()
        {
            

            return View();
        }

        public ActionResult BeastProfile(int id)
        {
            ViewData["BeastId"] = id;
            ViewBag.Title = "BeastKeeper - Beast Profile";
            return View();
        }
       
        public JsonResult GetBeasts()
        {
            var beasts = DataService.GetBeasts();
            return Json(new { list = beasts }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetBeast(int id)
        {
            var beast = DataService.GetBeast(id);
            return Json(new { beast = beast }, JsonRequestBehavior.AllowGet);
        }

        // POST: BeastProfile/AddOrUpdate/5
        [HttpPost]
        public async Task<ActionResult> AddOrUpdate(int id, Beast beast)
        {
            try
            {
                // TODO: Add update logic here
                var beastId = await DataService.AddOrUpdateBeast(beast);
                return RedirectToAction("BeastProfile", new { id = beastId });
            }
            catch
            {
                return View();
            }
        }


        // POST: BeastProfile/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }


    }
}