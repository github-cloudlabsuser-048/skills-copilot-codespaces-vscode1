# Login to your Azure account
Connect-AzAccount

# Select the subscription to use
Select-AzSubscription -SubscriptionName "Your Subscription Name"

# Define variables
$resourceGroupName = "YourResourceGroupName"
$location = "YourLocation" # Example: "westus"
$storageAccountName = "YourStorageAccountName"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS -Kind StorageV2