import Swal from "sweetalert2";

export const showSuccessAlert = (message = "Operation successful", callback = () => { }) => {
    Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
        // confirmButtonText: 'OK'
    }).then(() => {
        callback();
    });
};


export const showErrorAlert = (message = "Something went wrong") => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK'
    });
};

export const showConfirmAlert = async (
    title = "Are you sure?",
    message = "You won't be able to revert this!",
    confirmText = "Yes, delete it!",
    successTitle = "Deleted!",
    successMessage = "Your file has been deleted."
) => {
    const result = await Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmText
    });

    if (result.isConfirmed) {
        await Swal.fire({
            title: successTitle,
            text: successMessage,
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }

    return result;
};

export const showLoadingAlert = (message = "Please wait...") => {
    Swal.fire({
        title: message,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
};

export const closeAlert = () => {
    Swal.close();
};