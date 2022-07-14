import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_UserInputEnvelope } from "../inputs/FlowViewCreateManyFK_UserInputEnvelope";
import { FlowViewCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowViewCreateOrConnectWithoutFK_UserInput";
import { FlowViewCreateWithoutFK_UserInput } from "../inputs/FlowViewCreateWithoutFK_UserInput";
import { FlowViewScalarWhereInput } from "../inputs/FlowViewScalarWhereInput";
import { FlowViewUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/FlowViewUpdateManyWithWhereWithoutFK_UserInput";
import { FlowViewUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowViewUpdateWithWhereUniqueWithoutFK_UserInput";
import { FlowViewUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowViewUpsertWithWhereUniqueWithoutFK_UserInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowViewCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowViewCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowViewCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: FlowViewUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowViewCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  set?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: FlowViewUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: FlowViewUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowViewScalarWhereInput[] | undefined;
}
