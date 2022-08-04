import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateWithoutFK_UserOnStudyGroupInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyGroupCreateWithoutFK_UserOnStudyGroupInput, {
    nullable: false
  })
  create!: StudyGroupCreateWithoutFK_UserOnStudyGroupInput;
}
