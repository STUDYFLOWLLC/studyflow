import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardInputEnvelope } from "../inputs/FlashcardReviewCreateManyFK_FlashcardInputEnvelope";
import { FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput";
import { FlashcardReviewCreateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardInput";
import { FlashcardReviewScalarWhereInput } from "../inputs/FlashcardReviewScalarWhereInput";
import { FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput";
import { FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput";
import { FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateManyWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateManyWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateWithoutFK_FlashcardInput], {
    nullable: true
  })
  create?: FlashcardReviewCreateWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput], {
    nullable: true
  })
  upsert?: FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateManyFK_FlashcardInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardReviewCreateManyFK_FlashcardInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  set?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput], {
    nullable: true
  })
  update?: FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput], {
    nullable: true
  })
  updateMany?: FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashcardReviewScalarWhereInput[] | undefined;
}
