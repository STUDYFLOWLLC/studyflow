import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateManyFK_UserInputEnvelope } from "../inputs/AutomationCreateManyFK_UserInputEnvelope";
import { AutomationCreateOrConnectWithoutFK_UserInput } from "../inputs/AutomationCreateOrConnectWithoutFK_UserInput";
import { AutomationCreateWithoutFK_UserInput } from "../inputs/AutomationCreateWithoutFK_UserInput";
import { AutomationScalarWhereInput } from "../inputs/AutomationScalarWhereInput";
import { AutomationUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/AutomationUpdateManyWithWhereWithoutFK_UserInput";
import { AutomationUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/AutomationUpdateWithWhereUniqueWithoutFK_UserInput";
import { AutomationUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/AutomationUpsertWithWhereUniqueWithoutFK_UserInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [AutomationCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: AutomationCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: AutomationCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: AutomationUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: AutomationCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereUniqueInput], {
    nullable: true
  })
  set?: AutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereUniqueInput], {
    nullable: true
  })
  delete?: AutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereUniqueInput], {
    nullable: true
  })
  connect?: AutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: AutomationUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: AutomationUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AutomationScalarWhereInput[] | undefined;
}
