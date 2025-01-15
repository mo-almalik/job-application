import { Router } from "express";
import {Role} from "../../../utils/enum.js";
import {createJobSchema, querySchema} from "./job.validation.js";
import idValidate from "../../../utils/idValidate.js";
import {validate} from "../../middlewares/validation.js";
import { authentication ,authorize} from "../auth/auth.middleware.js";
import {createJob, deleteJob, getAllJob, getJobById, getJobsByCompanyId, getMyJobs} from "./job.controller.js";

const router = Router()

router.get('/my-job',authentication,authorize(Role.EMPLOYER),getMyJobs)
router.post('/:id',authentication,authorize(Role.EMPLOYER),validate(createJobSchema),createJob);
router.get('/:id/company',validate(idValidate),getJobsByCompanyId);
router.get('/:id',validate(idValidate),getJobById);
router.get('/',validate(querySchema),getAllJob);
router.delete('/delete/:id/',authentication,authorize(Role.EMPLOYER),validate(idValidate),deleteJob);

export default router