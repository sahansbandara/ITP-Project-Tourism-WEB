import re

with open('src/data/tourCategories.ts', 'r') as f:
    text = f.read()

# Replace all conflicts taking the bottom part
# The format is:
# <<<<<<< HEAD
#         href: '/tours/cultural',
# =======
#         href: '/packages/heritage-triangle-private-edition',
# >>>>>>> b116bb7 (UI refinement: infinite carousel, glass tags, dynamic mock packages, fix next.config.ts cloudfront host)

pattern = r"<<<<<<< HEAD\n[^\n]*\n=======\n(.*?)\n>>>>>>> b116bb7.*?\n"
text = re.sub(pattern, r"\1\n", text)

with open('src/data/tourCategories.ts', 'w') as f:
    f.write(text)
