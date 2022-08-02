import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope } from "../inputs/UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope";
import { UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput";
import { UserOnStudyGroupCreateWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_StudyGroupInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateWithoutFK_StudyGroupInput], {
    nullable: true
  })
  create?: UserOnStudyGroupCreateWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput], {
    nullable: true
  })
  connectOrCreate?: UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope, {
    nullable: true
  })
  createMany?: UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: UserOnStudyGroupWhereUniqueInput[] | undefined;
}
