import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_FlowInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlowInput";
import { RepetitionCreateWithoutFK_FlowInput } from "../inputs/RepetitionCreateWithoutFK_FlowInput";
import { RepetitionUpdateWithoutFK_FlowInput } from "../inputs/RepetitionUpdateWithoutFK_FlowInput";
import { RepetitionUpsertWithoutFK_FlowInput } from "../inputs/RepetitionUpsertWithoutFK_FlowInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionUpdateOneWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionUpdateOneWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlowInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_FlowInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpsertWithoutFK_FlowInput, {
    nullable: true
  })
  upsert?: RepetitionUpsertWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_FlowInput, {
    nullable: true
  })
  update?: RepetitionUpdateWithoutFK_FlowInput | undefined;
}
