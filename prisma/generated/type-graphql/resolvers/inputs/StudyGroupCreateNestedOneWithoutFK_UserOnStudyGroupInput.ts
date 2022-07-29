import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput";
import { StudyGroupCreateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateWithoutFK_UserOnStudyGroupInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => StudyGroupCreateWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  create?: StudyGroupCreateWithoutFK_UserOnStudyGroupInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  connectOrCreate?: StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: StudyGroupWhereUniqueInput | undefined;
}
