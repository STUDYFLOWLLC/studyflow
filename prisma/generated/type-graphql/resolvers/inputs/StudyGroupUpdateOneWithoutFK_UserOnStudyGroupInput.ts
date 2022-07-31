import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput";
import { StudyGroupCreateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateWithoutFK_UserOnStudyGroupInput";
import { StudyGroupUpdateWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupUpdateWithoutFK_UserOnStudyGroupInput";
import { StudyGroupUpsertWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupUpsertWithoutFK_UserOnStudyGroupInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => StudyGroupCreateWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  create?: StudyGroupCreateWithoutFK_UserOnStudyGroupInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  connectOrCreate?: StudyGroupCreateOrConnectWithoutFK_UserOnStudyGroupInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupUpsertWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  upsert?: StudyGroupUpsertWithoutFK_UserOnStudyGroupInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: StudyGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupUpdateWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  update?: StudyGroupUpdateWithoutFK_UserOnStudyGroupInput | undefined;
}
