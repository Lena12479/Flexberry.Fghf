﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fghf
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отпуск материала.
    /// </summary>
    // *** Start programmer edit section *** (ОтпускМатериала CustomAttributes)

    // *** End programmer edit section *** (ОтпускМатериала CustomAttributes)
    [AutoAltered()]
    [Caption("Отпуск материала")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтпускМатериалаE", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Заказ as \'Заказ\'",
            "Заказ.Материал as \'Материал\'"}, Hidden=new string[] {
            "Сотрудники.ФИО",
            "Заказ.Материал"})]
    [MasterViewDefineAttribute("ОтпускМатериалаE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ОтпускМатериалаE", "Заказ", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Материал")]
    [View("ОтпускМатериалаL", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Заказ.Материал as \'Материал\'"})]
    public class ОтпускМатериала : ICSSoft.STORMNET.DataObject
    {
        
        private string fДатаПроводки;
        
        private IIS.Fghf.Сотрудники fСотрудники;
        
        private IIS.Fghf.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (ОтпускМатериала CustomMembers)

        // *** End programmer edit section *** (ОтпускМатериала CustomMembers)

        
        /// <summary>
        /// ДатаПроводки.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаПроводки
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)
                string result = this.fДатаПроводки;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)
                this.fДатаПроводки = value;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)
            }
        }
        
        /// <summary>
        /// Отпуск материала.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.Заказ CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.Заказ CustomAttributes)
        [PropertyStorage(new string[] {
                "Заказ"})]
        [NotNull()]
        public virtual IIS.Fghf.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Get start)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Get start)
                IIS.Fghf.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Get end)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Set start)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Set end)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Отпуск материала.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Fghf.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get start)
                IIS.Fghf.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтпускМатериалаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаE", typeof(IIS.Fghf.ОтпускМатериала));
                }
            }
            
            /// <summary>
            /// "ОтпускМатериалаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаL", typeof(IIS.Fghf.ОтпускМатериала));
                }
            }
        }
    }
}
