import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_StudyGroupInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateWithoutFK_StudyGroupInput, {
    nullable: false
  })
  create!: UserOnStudyGroupCreateWithoutFK_StudyGroupInput;
}
