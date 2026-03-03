import re

with open('src/components/public/TourCategoriesCarousel.tsx', 'r') as f:
    text = f.read()

# Block 1
text = re.sub(r'<<<<<<< HEAD\n        const itemWidth = firstChild\?\.offsetWidth \|\| \(window\.innerWidth < 768 \? 280 : 360\);\n        const gap = 32;\n=======\n        const secondChild = container\.children\[1\] as HTMLElement \| undefined;\n        const itemOffset = secondChild \? secondChild\.offsetLeft - \(firstChild\?\.offsetLeft \|\| 0\) : \(firstChild\?\.offsetWidth \|\| 400\) \+ 32;\n>>>>>>> b116bb7 \(.*?\)',
'''        const secondChild = container.children[1] as HTMLElement | undefined;
        const itemOffset = secondChild ? secondChild.offsetLeft - (firstChild?.offsetLeft || 0) : (firstChild?.offsetWidth || 400) + 32;''', text)

# Block 2
text = re.sub(r"<<<<<<< HEAD\n                const container = scrollRef\.current;\n                if \(container\.scrollLeft \+ container\.clientWidth >= container\.scrollWidth - 10\) {\n                    scrollTo\('start'\);\n                } else {\n                    scrollTo\('right'\);\n                }\n=======\n                scrollTo\('right'\);\n>>>>>>> b116bb7 \(.*?\)",
'''                scrollTo('right');''', text)

# Block 3
text = re.sub(r'<<<<<<< HEAD\n                <div className="relative group/carousel -mx-6 md:-mx-16 lg:-mx-20 py-8">\n=======\n                <div className="relative group/carousel -mx-6 md:-mx-12 pt-8 pb-12">\n>>>>>>> b116bb7 \(.*?\)',
'''                <div className="relative group/carousel -mx-6 md:-mx-12 pt-8 pb-12">''', text)

# Block 4
text = re.sub(r'<<<<<<< HEAD\n                    {\/\* Left Navigation - Nude Glass Circle \*\/}\n(.*?)\n                    {\/\* ── Scroll-snap Horizontal Rail ── \*\/}\n                    <div\n                        ref=\{scrollRef\}\n                        className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory px-10 md:px-20 lg:px-24 scrollbar-none"\n=======\n                    {\/\* ── Scroll-snap Horizontal Rail ── \*\/}\n                    <div\n                        ref=\{scrollRef\}\n                        className="flex gap-6 md:gap-8 overflow-x-auto pt-10 pb-12 snap-x snap-mandatory px-\[max\(1\.5rem,calc\(50vw-170px\)\)\] md:px-\[max\(3rem,calc\(50vw-210px\)\)\] lg:px-\[max\(3rem,calc\(50vw-240px\)\)\] scrollbar-none"\n>>>>>>> b116bb7 \(.*?\)',
r'''                    {/* Left Navigation - Nude Glass Circle */}
\1
                    {/* ── Scroll-snap Horizontal Rail ── */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto pt-10 pb-12 snap-x snap-mandatory px-[max(1.5rem,calc(50vw-170px))] md:px-[max(3rem,calc(50vw-210px))] lg:px-[max(3rem,calc(50vw-240px))] scrollbar-none"''', text, flags=re.DOTALL)

# Block 5
text = re.sub(r'<<<<<<< HEAD\n                                    className="relative rounded-\[32px\] overflow-hidden cursor-pointer flex-shrink-0 snap-center transition-all duration-\[600ms\] group w-\[280px\] md:w-\[360px\] lg:w-\[420px\] h-\[480px\] md:h-\[580px\]"\n=======\n                                    key=\{`\$\{idx\}-\$\{cat\.title\}`\}\n                                    className={`relative rounded-\[32px\] overflow-hidden flex-shrink-0 snap-center group w-\[340px\] md:w-\[420px\] lg:w-\[480px\] h-\[540px\] md:h-\[640px\]`}\n                                    style=\{\{\n                                        transform: idx === centerIndex \? \'scale\(1\.05\)\' : \'scale\(0\.92\)\',\n                                        opacity: idx === centerIndex \? 1 : 0\.6,\n                                        transition: \'transform 0\.6s cubic-bezier\(0\.4, 0, 0\.2, 1\), opacity 0\.6s cubic-bezier\(0\.4, 0, 0\.2, 1\)\',\n                                    \}\}\n>>>>>>> b116bb7 \(.*?\)',
'''                                    key={`${idx}-${cat.title}`}
                                    className={`relative rounded-[32px] overflow-hidden cursor-pointer flex-shrink-0 snap-center group w-[340px] md:w-[420px] lg:w-[480px] h-[540px] md:h-[640px]`}
                                    style={{
                                        transform: idx === centerIndex ? 'scale(1.05)' : 'scale(0.92)',
                                        opacity: idx === centerIndex ? 1 : 0.6,
                                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}''', text)


with open('src/components/public/TourCategoriesCarousel.tsx', 'w') as f:
    f.write(text)
