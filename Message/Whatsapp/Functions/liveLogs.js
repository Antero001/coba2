"use strict"; 
const spin = global['Ft'].spin

const spinner = { 
"interval": 120,
"frames": [
    "",  
    "𝗕",  
    "𝗕𝗬",  
    "𝗕𝗬 ",  
    "𝗕𝗬 ∶",  
    "𝗕𝗬 ∶ ",  
    "𝗕𝗬 ∶ メ",  
    "𝗕𝗬 ∶ メ𝗟",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 ",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜 ",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
            "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",          
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",      
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽...",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽..",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽.",  
    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵𒉽",  
        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍⁴̵",      
            "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅⁰͍",          
                "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ⁴̅",              
                    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜  ",                  
                        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜 ",                      
                            "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙𝗜",                          
                                "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜𝗙",                              
                                    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥𝗜",                                  
                                        "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔𝗥",                                      
                                            "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 𝗔",                                          
                                                "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗 ",                                              
                                                    "𝗕𝗬 ∶ メ𝗟𝗢𝗥𝗗",                                                  
                                                        "𝗕𝗬 ∶ メ𝗟𝗢𝗥",                                                      
                                                            "𝗕𝗬 ∶ メ𝗟",                                                          
                                                                "𝗕𝗬 ∶ メ",                                                              
                                                                    "𝗕𝗬 ∶ ",                                                                  
                                                                        "𝗕𝗬 ∶",                                                                      
                                                                            "𝗕𝗬 ",                                                                          
                                                                                "𝗕𝗬",                                                                              
                                                                                    "𝗕",                                                                                  
]}

let globalSpinner;
let getGlobalSpinner = (disableSpins = false) => {
    if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
        return globalSpinner;
      }
   let spins = getGlobalSpinner(false)

exports.start = (id, text) => {
	spins.add(id, {text: text})
	}
exports.info = (id, text) => {
	spins.update(id, {text: text})
    }
exports.success = (id, text) => {
	spins.succeed(id, {text: text})
	}
exports.close = (id, text) => {
	spins.fail(id, {text: text})
}