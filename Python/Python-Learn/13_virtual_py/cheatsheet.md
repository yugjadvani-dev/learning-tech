# python virtual environment cheatsheet

## Download Packages

https://pypi.org/project/virtualenv/

`pip install virtualenv`

## Guide

https://github.com/pypa/virtualenv
https://virtualenv.pypa.io/en/latest/user_guide.html
https://docs.python.org/3/library/venv.html#
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4

## Create a new virtual environment

`python -m venv env_name`

## Install packages

`pip install package_name`

## Save installed packages to a file

`pip freeze > requirements.txt`
or
`pip list --format=freeze > requirements.txt`

## Install packages from a file

`pip install -r requirements.txt`

## Deactivate the current virtual environment

`deactivate`

## In Linux or Mac, activate the new python environment

`source env_name/bin/activate`

## Or in Windows

`.\env_name\Scripts\activate`

## Error in this command => .\.venv\Scripts\activate

![alt text](image.png)

## Solution

`Get-ExecutionPolicy`
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force`
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force`

## Generating requirement.txt

`pip list > requirement.txt`

## this is used to install packages from requirement.txt file

`pip install -r requirements.txt`

## deactivate virtualenv

`deactivate`
