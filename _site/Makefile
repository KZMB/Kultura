all: upload
site:
	jekyll build
upload: site
	rsync -pvtrlL --cvs-exclude --delete _site/ cirdan:websites/kulturaboskovice.cz
clean:
	rm -rf _site
