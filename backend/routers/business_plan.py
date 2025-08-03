from fastapi import APIRouter, HTTPException, Depends
from typing import List
import logging

from ..models.business_plan import (
    BusinessPlan, 
    CompanyInfo, 
    ExecutiveSummary,
    MarketData,
    FinancialData,
    MenuData,
    LocationInfo,
    InvestmentData
)
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/business-plan", tags=["business-plan"])

# MongoDB connection
from ..server import db

logger = logging.getLogger(__name__)


@router.get("/overview")
async def get_overview():
    """Get business plan overview including company info and executive summary"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "company": business_plan["company"],
            "executive_summary": business_plan["executive_summary"]
        }
    except Exception as e:
        logger.error(f"Error fetching overview: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/market-analysis")
async def get_market_analysis():
    """Get market analysis data including Shanghai market info and growth trends"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "market_data": business_plan["market_data"]
        }
    except Exception as e:
        logger.error(f"Error fetching market analysis: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/financial")
async def get_financial():
    """Get financial projections and investment data"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "financial_data": business_plan["financial_data"]
        }
    except Exception as e:
        logger.error(f"Error fetching financial data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/menu")
async def get_menu():
    """Get menu items and food options"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "menu": business_plan["menu"]
        }
    except Exception as e:
        logger.error(f"Error fetching menu data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/locations")
async def get_locations():
    """Get location information and expansion plans"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "locations": business_plan["locations"]
        }
    except Exception as e:
        logger.error(f"Error fetching locations data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/investment")
async def get_investment():
    """Get investment requirements and ROI projections"""
    try:
        business_plan = await db.business_plans.find_one({}, {"_id": 0})
        
        if not business_plan:
            raise HTTPException(status_code=404, detail="Business plan not found")
        
        return {
            "investment": business_plan["investment"]
        }
    except Exception as e:
        logger.error(f"Error fetching investment data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.post("/seed")
async def seed_business_plan():
    """Seed database with initial business plan data (development only)"""
    try:
        # Check if data already exists
        existing = await db.business_plans.find_one({})
        if existing:
            return {"message": "Business plan data already exists"}

        # Sample business plan data based on the provided requirements
        business_plan_data = {
            "id": "shanghai-cloud-kitchen-2024",
            "company": {
                "name": "SHANGHAI CLOUD KITCHEN PROJECT",
                "subtitle": "CAVA Tarzı Akdeniz Mutfağı - Yatırım Sunumu",
                "tagline": "Taze, Sağlıklı, Özelleştirilebilir",
                "vision": "Shanghai'da CAVA restorant zincirine benzer bir model ile premium, sağlıklı ve özelleştirilebilir Akdeniz yemeklerini cloud kitchen formatında sunmak.",
                "target": "Shanghai'daki sağlık bilincine sahip, premium yemek deneyimi arayan 25-45 yaş arası kentli profesyoneller."
            },
            "executive_summary": {
                "vision": "Shanghai'da CAVA restorant zincirine benzer bir model ile premium, sağlıklı ve özelleştirilebilir Akdeniz yemeklerini cloud kitchen formatında sunmak.",
                "target_market": "Shanghai'daki sağlık bilincine sahip, premium yemek deneyimi arayan 25-45 yaş arası kentli profesyoneller.",
                "business_model": "Cloud kitchen (hayalet mutfak) formatında, sadece teslimat ve paket servis odaklı operasyon.",
                "financial_target": "İlk yıl 2 milyon RMB ciro, %20 net kar marjı."
            },
            "market_data": {
                "shanghai_market": {
                    "size": "50+ milyar RMB",
                    "growth": "15-20%",
                    "penetration": "85%+",
                    "average_order": "45-80 RMB"
                },
                "cloud_kitchen_growth": [
                    {"year": 2020, "traditional": 5, "cloud_kitchen": 25, "market_share": 15},
                    {"year": 2021, "traditional": 6, "cloud_kitchen": 30, "market_share": 18},
                    {"year": 2022, "traditional": 7, "cloud_kitchen": 35, "market_share": 22},
                    {"year": 2023, "traditional": 8, "cloud_kitchen": 40, "market_share": 26},
                    {"year": 2024, "traditional": 8, "cloud_kitchen": 45, "market_share": 28},
                    {"year": 2025, "traditional": 9, "cloud_kitchen": 50, "market_share": 32},
                    {"year": 2026, "traditional": 9, "cloud_kitchen": 55, "market_share": 37},
                    {"year": 2027, "traditional": 10, "cloud_kitchen": 60, "market_share": 45}
                ],
                "cost_comparison": [
                    {"category": "Kira Maliyeti", "traditional": 100, "cloud_kitchen": 35, "savings": 65},
                    {"category": "Personel Gideri", "traditional": 100, "cloud_kitchen": 55, "savings": 45},
                    {"category": "Dekor/Mobilya", "traditional": 100, "cloud_kitchen": 12, "savings": 88},
                    {"category": "Toplam CapEx", "traditional": 100, "cloud_kitchen": 40, "savings": 60}
                ],
                "target_demographics": [
                    {"age": "25-35 yaş", "percentage": 45, "description": "Tech-savvy profesyoneller"},
                    {"age": "35-45 yaş", "percentage": 35, "description": "Aileli yöneticiler"},
                    {"age": "45+ yaş", "percentage": 20, "description": "Üst düzey yöneticiler"}
                ]
            },
            "financial_data": {
                "initial_investment": [
                    {"category": "Mutfak Ekipmanları", "amount": 300000, "percentage": 30},
                    {"category": "Renovasyon & Kurulum", "amount": 200000, "percentage": 20},
                    {"category": "Marka Geliştirme", "amount": 50000, "percentage": 5},
                    {"category": "İlk Stok & Malzeme", "amount": 100000, "percentage": 10},
                    {"category": "Teknoloji & Yazılım", "amount": 80000, "percentage": 8},
                    {"category": "Pazarlama", "amount": 150000, "percentage": 15},
                    {"category": "İşletme Sermayesi", "amount": 120000, "percentage": 12}
                ],
                "revenue_projection": [
                    {"month": "Ay 1-3", "orders": 3000, "avg_value": 50, "revenue": 150000, "cumulative": 450000},
                    {"month": "Ay 4-6", "orders": 8000, "avg_value": 52, "revenue": 416000, "cumulative": 1698000},
                    {"month": "Ay 7-9", "orders": 12000, "avg_value": 55, "revenue": 660000, "cumulative": 3678000},
                    {"month": "Ay 10-12", "orders": 15000, "avg_value": 58, "revenue": 870000, "cumulative": 6288000}
                ],
                "profitability": {
                    "yearly_revenue": 6300000,
                    "operation_costs": 5040000,
                    "net_profit": 1260000,
                    "margin": 20
                }
            },
            "menu": {
                "signature_bowls": [
                    {"name": "Mediterranean Power Bowl", "price": "65 RMB", "description": "Protein, taze sebzeler ve Akdeniz sosları"},
                    {"name": "Greek Goddess Bowl", "price": "58 RMB", "description": "Klasik Yunan lezzetleri modern sunumla"},
                    {"name": "Levantine Fusion Bowl", "price": "62 RMB", "description": "Doğu Akdeniz tatları Asya dokunuşlarıyla"},
                    {"name": "Shanghai Spice Bowl", "price": "55 RMB", "description": "Yerel damak tadına uyarlanmış özel karışım"},
                    {"name": "Quinoa Garden Bowl", "price": "52 RMB", "description": "Vegan dostu süper gıda kasesi"}
                ],
                "proteins": ["Grilled Chicken", "Lamb Kofta", "Falafel", "Grilled Salmon", "Tofu Teriyaki"],
                "toppings": ["Hummus", "Tzatziki", "Harissa", "Tabbouleh", "Roasted Vegetables", "Fresh Herbs"],
                "sides": ["Pita Bread", "Baklava Bites", "Fresh Fruit Cups", "Premium Beverages"]
            },
            "locations": [
                {
                    "name": "Jing'an Cloud Kitchen",
                    "area": "200 m²",
                    "capacity": "150 sipariş/gün",
                    "features": ["Premium konut bölgesi", "5 km teslimat yarıçapı"],
                    "phase": 1
                },
                {
                    "name": "Huangpu Cloud Kitchen", 
                    "area": "180 m²",
                    "capacity": "120 sipariş/gün",
                    "features": ["İş merkezi yakınlığı", "Hızlı teslimat imkanı"],
                    "phase": 1
                },
                {
                    "name": "Pudong Cloud Kitchen",
                    "area": "220 m²", 
                    "capacity": "180 sipariş/gün",
                    "features": ["Finansal merkez", "Yüksek gelir demografisi"],
                    "phase": 2
                },
                {
                    "name": "Xuhui Cloud Kitchen",
                    "area": "190 m²",
                    "capacity": "140 sipariş/gün", 
                    "features": ["Genç profesyoneller", "Üniversite yakınlığı"],
                    "phase": 2
                }
            ],
            "investment": {
                "amount": "1,500,000 RMB",
                "usage": [
                    {"purpose": "Cloud kitchen kurulum", "percentage": 60},
                    {"purpose": "Marka geliştirme & pazarlama", "percentage": 25},
                    {"purpose": "İşletme sermayesi", "percentage": 15}
                ],
                "roi_projection": [
                    {"year": 2, "roi": "150%"},
                    {"year": 3, "roi": "300%"},
                    {"year": 5, "roi": "Exit Strategy: Series A (3-5x multiple)"}
                ],
                "success_metrics": {
                    "six_months": [
                        "2 cloud kitchen operasyonda",
                        "Günlük 200+ sipariş",
                        "4.5+ yıldız rating",
                        "%15+ repeat customer rate",
                        "%30+ marka bilinirliği"
                    ],
                    "twelve_months": [
                        "4 cloud kitchen operasyonda", 
                        "Günlük 600+ sipariş",
                        "6+ milyon RMB ciro",
                        "%20+ net profit margin",
                        "%60+ marka bilinirliği"
                    ]
                }
            }
        }

        result = await db.business_plans.insert_one(business_plan_data)
        
        return {
            "message": "Business plan data seeded successfully",
            "inserted_id": str(result.inserted_id)
        }
        
    except Exception as e:
        logger.error(f"Error seeding business plan: {e}")
        raise HTTPException(status_code=500, detail="Failed to seed business plan data")