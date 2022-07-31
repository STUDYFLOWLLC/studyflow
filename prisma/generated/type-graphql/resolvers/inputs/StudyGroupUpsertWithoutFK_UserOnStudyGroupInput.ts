import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateWithoutFK_UserOnStudyGroupInput";
import { StudyGroupUpdateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupUpdateWithoutFK_UserOnStudyGroupInput";

@TypeGraphQL.InputType("StudyGroupUpsertWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupUpsertWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => StudyGroupUpdateWithoutFK_UserOnStudyGroupInput, {
    nullable: false
  })
  update!: StudyGroupUpdateWithoutFK_UserOnStudyGroupInput;

  @TypeGraphQL.Field(_type => StudyGroupCreateWithoutFK_UserOnStudyGroupInput, {
    nullable: false
  })
  create!: StudyGroupCreateWithoutFK_UserOnStudyGroupInput;
}
