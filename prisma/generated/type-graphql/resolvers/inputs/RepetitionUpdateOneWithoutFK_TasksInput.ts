import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_TasksInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_TasksInput";
import { RepetitionCreateWithoutFK_TasksInput } from "../inputs/RepetitionCreateWithoutFK_TasksInput";
import { RepetitionUpdateWithoutFK_TasksInput } from "../inputs/RepetitionUpdateWithoutFK_TasksInput";
import { RepetitionUpsertWithoutFK_TasksInput } from "../inputs/RepetitionUpsertWithoutFK_TasksInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionUpdateOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionUpdateOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpsertWithoutFK_TasksInput, {
    nullable: true
  })
  upsert?: RepetitionUpsertWithoutFK_TasksInput | undefined;

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

  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_TasksInput, {
    nullable: true
  })
  update?: RepetitionUpdateWithoutFK_TasksInput | undefined;
}
